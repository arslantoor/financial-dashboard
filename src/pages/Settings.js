import React, { useState } from 'react'
import TabsComponent from '../components/settings/TabsComponent'
import ProfileForm from '../components/settings/ProfileForm'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Edit Profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'security', label: 'Security' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm p-[20px] md:p-[30px]">
      <TabsComponent tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'profile' && <ProfileForm />}

      {activeTab === 'preferences' && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
        </div>
      )}

      {activeTab === 'security' && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Security</h3>
        </div>
      )}
    </div>
  )
}

export default Settings
