import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../store/slices/userSlice'
import { Icon } from '@iconify/react'
import FormInput from './FormInput'
import DateOfBirthInput from './DateOfBirthInput'
import { toast } from 'react-toastify'

const formFields = [
  {
    name: 'name',
    label: 'Your Name',
    placeholder: 'Enter your name',
    type: 'text',
    component: 'input',
    required: true,
    ariaLabel: 'Name',
  },
  {
    name: 'userName',
    label: 'User Name',
    placeholder: 'Enter username',
    type: 'text',
    component: 'input',
    required: true,
    ariaLabel: 'User Name',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    type: 'email',
    component: 'input',
    required: true,
    ariaLabel: 'Email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: '••••••••••',
    type: 'password',
    component: 'input',
    required: true,
    ariaLabel: 'Password',
  },
  {
    name: 'dateOfBirth',
    label: 'Date of Birth',
    type: 'date',
    component: 'date',
    required: true,
    ariaLabel: 'Date of Birth',
  },
  {
    name: 'presentAddress',
    label: 'Present Address',
    placeholder: 'San Jose, California, USA',
    type: 'text',
    component: 'input',
    required: true,
    ariaLabel: 'Present Address',
  },
  {
    name: 'permanentAddress',
    label: 'Permanent Address',
    placeholder: 'San Jose, California, USA',
    type: 'text',
    component: 'input',
    ariaLabel: 'Permanent Address',
  },
  {
    name: 'city',
    label: 'City',
    placeholder: 'San Jose',
    type: 'text',
    component: 'input',
    required: true,
    ariaLabel: 'City',
  },
  {
    name: 'postalCode',
    label: 'Postal Code',
    placeholder: '45962',
    type: 'text',
    component: 'input',
    ariaLabel: 'Postal Code',
  },
  {
    name: 'country',
    label: 'Country',
    placeholder: 'USA',
    type: 'text',
    component: 'input',
    required: true,
    ariaLabel: 'Country',
  },
]

const ProfileForm = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const fileInputRef = useRef(null)
  const initialFormData = {
    name: user.name || '',
    userName: user.userName || '',
    email: user.email || '',
    password: user.password || '',
    dateOfBirth: user.dateOfBirth || '',
    presentAddress: user.presentAddress || '',
    permanentAddress: user.permanentAddress || '',
    city: user.city || '',
    postalCode: user.postalCode || '',
    country: user.country || '',
  }
  const [formData, setFormData] = useState(initialFormData)
  const [isChanged, setIsChanged] = useState(false)
  const [previewImage, setPreviewImage] = useState(user.avatar || '/default-avatar.png')
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
    setIsChanged((prev) => JSON.stringify(prev) !== JSON.stringify(initialFormData))
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
        dispatch(updateUser({ avatar: reader.result }))
        toast.success('Profile picture updated successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.userName.trim()) {
      newErrors.userName = 'User Name is required'
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const { password, ...userData } = formData
      const dataToUpdate = password ? { ...userData, password } : userData
      dispatch(updateUser(dataToUpdate))
      toast.success('Profile updated successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      })
    }
  }

  const renderFormField = (field) => {
    const commonProps = {
      key: field.name,
      label: field.label,
      name: field.name,
      value: formData[field.name],
      onChange: handleChange,
      error: errors[field.name],
      required: field.required,
      ariaLabel: field.ariaLabel,
    }

    switch (field.component) {
      case 'date':
        return <DateOfBirthInput {...commonProps} />
      case 'input':
      default:
        return <FormInput {...commonProps} type={field.type} placeholder={field.placeholder} />
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row py-[41px] gap-[20px] md:gap-[57px]">
        <div className="relative w-[90px] h-[90px] self-center md:self-start">
          <img
            src={previewImage}
            alt={user.name}
            className="w-full h-full min-w-[90px] rounded-full object-cover"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
            aria-label="Upload profile picture"
          />
          <button
            type="button"
            onClick={handleImageClick}
            className="absolute bottom-[-7px] right-[-7px] w-[30px] h-[30px] bg-black rounded-full border border-gray-200 flex items-center justify-center shadow-sm"
          >
            <Icon icon="fa-solid:pencil-alt" color="white" />
          </button>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map(renderFormField)}
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <button
          disabled={!isChanged}
          type="submit"
          className={`w-full md:w-[190px] h-[50px] rounded-[15px] transition-colors ${isChanged ? 'bg-[#232323] text-white hover:bg-gray-800' : 'bg-gray-400 text-gray-200'}`}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default ProfileForm
