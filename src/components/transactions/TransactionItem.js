import React from 'react'

const TransactionItem = ({ transaction }) => {
  const { description, date, amount, iconBg, iconColor, from } = transaction

  const isExpense = amount < 0
  const formattedAmount = isExpense
    ? `-$${Math.abs(amount).toLocaleString()}`
    : `+$${amount.toLocaleString()}`
  const paymentFrom = {
    Card: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M18.6452 24.6094H5.67984C4.9859 24.6086 4.32059 24.3327 3.8299 23.842C3.33921 23.3513 3.06322 22.686 3.0625 21.992V14.2543C3.06322 13.5604 3.33921 12.895 3.8299 12.4044C4.32059 11.9137 4.9859 11.6377 5.67984 11.6369H18.6452C19.3391 11.6377 20.0044 11.9137 20.4951 12.4044C20.9858 12.895 21.2618 13.5604 21.2625 14.2543V21.992C21.2618 22.686 20.9858 23.3513 20.4951 23.842C20.0044 24.3327 19.3391 24.6086 18.6452 24.6094ZM5.67984 13.2776C5.42089 13.2779 5.17263 13.3809 4.98952 13.564C4.80641 13.7471 4.70341 13.9953 4.70312 14.2543V21.992C4.70341 22.251 4.80641 22.4992 4.98952 22.6824C5.17263 22.8655 5.42089 22.9685 5.67984 22.9687H18.6452C18.9041 22.9685 19.1524 22.8655 19.3355 22.6824C19.5186 22.4992 19.6216 22.251 19.6219 21.992V14.2543C19.6216 13.9953 19.5186 13.7471 19.3355 13.564C19.1524 13.3809 18.9041 13.2779 18.6452 13.2776H5.67984Z"
          fill="#FFBB38"
        />
        <path
          d="M22.3213 20.1917H20.4422C20.2247 20.1917 20.016 20.1053 19.8622 19.9515C19.7084 19.7976 19.6219 19.589 19.6219 19.3714C19.6219 19.1538 19.7084 18.9452 19.8622 18.7914C20.016 18.6375 20.2247 18.5511 20.4422 18.5511H22.3213C22.5801 18.5505 22.8281 18.4474 23.0109 18.2643C23.1938 18.0812 23.2966 17.8331 23.2969 17.5744V9.83664C23.2968 9.57778 23.194 9.32954 23.0111 9.14635C22.8282 8.96315 22.5802 8.85995 22.3213 8.85938H9.35599C9.09704 8.85966 8.84877 8.96266 8.66567 9.14577C8.48256 9.32888 8.37956 9.57714 8.37927 9.83609V12.4567C8.37927 12.6743 8.29285 12.8829 8.13901 13.0368C7.98517 13.1906 7.77652 13.277 7.55896 13.277C7.3414 13.277 7.13275 13.1906 6.97891 13.0368C6.82507 12.8829 6.73865 12.6743 6.73865 12.4567V9.83664C6.73923 9.1426 7.01515 8.47715 7.50586 7.98635C7.99656 7.49554 8.66196 7.21947 9.35599 7.21875H22.3213C23.0152 7.21976 23.6803 7.49595 24.1707 7.98673C24.6612 8.47751 24.937 9.14279 24.9376 9.83664V17.5744C24.9368 18.2681 24.661 18.9333 24.1705 19.4239C23.6801 19.9146 23.0151 20.1907 22.3213 20.1917Z"
          fill="#FFBB38"
        />
        <path
          d="M20.4422 18.7463H3.88281C3.66525 18.7463 3.4566 18.6599 3.30276 18.5061C3.14893 18.3522 3.0625 18.1436 3.0625 17.926V15.1709C3.0625 14.9533 3.14893 14.7447 3.30276 14.5908C3.4566 14.437 3.66525 14.3506 3.88281 14.3506H20.4422C20.6597 14.3506 20.8684 14.437 21.0222 14.5908C21.1761 14.7447 21.2625 14.9533 21.2625 15.1709V17.926C21.2625 18.1436 21.1761 18.3522 21.0222 18.5061C20.8684 18.6599 20.6597 18.7463 20.4422 18.7463ZM4.70312 17.1057H19.6219V15.9912H4.70312V17.1057Z"
          fill="#FFBB38"
        />
      </svg>
    ),
    Paypal: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M22.995 8.38251C22.9812 6.85223 22.3642 5.3892 21.278 4.31119C20.1918 3.23318 18.7241 2.62725 17.1938 2.62501H8.75004C8.54031 2.62231 8.33659 2.69504 8.17598 2.82995C8.01538 2.96485 7.90858 3.15296 7.87504 3.36001L4.88254 22.1288C4.86384 22.253 4.87214 22.3799 4.90687 22.5007C4.94159 22.6215 5.00194 22.7334 5.08379 22.8288C5.16511 22.9264 5.26673 23.0052 5.38157 23.0596C5.49641 23.114 5.62172 23.1427 5.74879 23.1438H9.36254L9.17004 24.36C9.14959 24.4861 9.15699 24.6151 9.19171 24.738C9.22643 24.8609 9.28764 24.9747 9.37102 25.0714C9.45441 25.1681 9.55795 25.2454 9.67439 25.2979C9.79083 25.3503 9.91734 25.3767 10.045 25.375H14.1138C14.3222 25.378 14.5249 25.3065 14.6853 25.1734C14.8458 25.0403 14.9534 24.8542 14.9888 24.6488L15.8638 19.3025H18.62C20.3452 19.2956 21.9974 18.606 23.2156 17.3845C24.4339 16.163 25.119 14.5089 25.1213 12.7838V12.5388C25.1204 11.7273 24.9273 10.9275 24.5577 10.2051C24.1881 9.48266 23.6526 8.85807 22.995 8.38251ZM9.49379 4.37501H17.1938C18.1118 4.37783 19.0018 4.69168 19.7184 5.26535C20.4351 5.83902 20.9363 6.63865 21.14 7.53376C20.7615 7.44498 20.3738 7.40093 19.985 7.40251H12.6875C12.4778 7.39981 12.2741 7.47254 12.1135 7.60745C11.9529 7.74235 11.8461 7.93046 11.8125 8.13751L11.2963 11.375C11.2592 11.6071 11.3157 11.8444 11.4536 12.0347C11.5914 12.2251 11.7992 12.3529 12.0313 12.39C12.2634 12.4271 12.5007 12.3706 12.691 12.2327C12.8814 12.0949 13.0092 11.8871 13.0463 11.655L13.4488 9.13501H20.0025C20.422 9.13721 20.8374 9.21732 21.2275 9.37126C21.0612 10.741 20.4003 12.0029 19.3691 12.9197C18.3379 13.8365 17.0074 14.3451 15.6275 14.35H11.5675C11.3591 14.347 11.1564 14.4185 10.996 14.5516C10.8356 14.6848 10.728 14.8708 10.6925 15.0763L9.62504 21.3938H6.77254L9.49379 4.37501ZM23.3713 12.7838C23.369 14.0448 22.8682 15.2538 21.9782 16.1471C21.0882 17.0404 19.881 17.5456 18.62 17.5525H15.12C14.9116 17.5495 14.7089 17.621 14.5485 17.7541C14.3881 17.8873 14.2805 18.0733 14.245 18.2788L13.37 23.625H11.06L11.2525 22.4088L12.3025 16.1175H15.61C17.2435 16.1127 18.8296 15.5677 20.121 14.5675C21.4125 13.5672 22.3368 12.1679 22.75 10.5875C23.1562 11.1569 23.3734 11.8394 23.3713 12.5388V12.7838Z"
          fill="#396AFF"
        />
      </svg>
    ),
    Bank: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <path
          d="M14.0001 11.379C14.4962 11.379 14.9013 11.7831 14.9013 12.2792C14.9013 12.7319 15.2693 13.0988 15.7219 13.0988C16.1736 13.0988 16.5415 12.7319 16.5415 12.2792C16.5415 11.1671 15.817 10.2287 14.8197 9.88556V9.42048C14.8197 8.96884 14.4528 8.59987 14.0001 8.59987C13.5464 8.59987 13.1795 8.96884 13.1795 9.42048V9.88556C12.1822 10.2287 11.4597 11.1671 11.4597 12.2792C11.4597 13.6817 12.5987 14.8206 14.0001 14.8206C14.4962 14.8206 14.9013 15.2257 14.9013 15.7218C14.9013 16.2189 14.4962 16.6231 14.0001 16.6231C13.504 16.6231 13.0999 16.2189 13.0999 15.7218C13.0999 15.2691 12.732 14.9012 12.2793 14.9012C11.8256 14.9012 11.4597 15.2691 11.4597 15.7218C11.4597 16.8339 12.1822 17.7713 13.1795 18.1144V18.5795C13.1795 19.0332 13.5464 19.4011 14.0001 19.4011C14.4528 19.4011 14.8197 19.0332 14.8197 18.5795V18.1144C15.817 17.7713 16.5415 16.8339 16.5415 15.7218C16.5415 14.3204 15.4016 13.1804 14.0001 13.1804C13.504 13.1804 13.0999 12.7763 13.0999 12.2792C13.0999 11.7831 13.504 11.379 14.0001 11.379ZM20.872 18.5547C21.274 18.7666 21.769 18.6126 21.9799 18.2136C22.662 16.9248 23.0217 15.4676 23.0217 14C23.0217 9.02671 18.9734 4.97947 14.0001 4.97947C9.0258 4.97947 4.97856 9.02671 4.97856 14C4.97856 18.9743 9.0258 23.0215 14.0001 23.0215C15.446 23.0215 16.8826 22.6722 18.1548 22.0097C18.5569 21.802 18.7129 21.3049 18.5042 20.9039C18.2954 20.5039 17.8004 20.3447 17.3973 20.5545C16.3441 21.1044 15.2 21.3824 14.0001 21.3824C9.93013 21.3824 6.61771 18.071 6.61771 14C6.61771 9.93104 9.93013 6.61862 14.0001 6.61862C18.0701 6.61862 21.3825 9.93104 21.3825 14C21.3825 15.202 21.0869 16.3936 20.5309 17.4457C20.318 17.8467 20.471 18.3428 20.872 18.5547ZM14.0001 1.69702C11.6241 1.69702 9.31725 2.37707 7.3298 3.66173C6.94844 3.90771 6.83992 4.41517 7.08589 4.7955C7.3329 5.17583 7.83829 5.28332 8.22069 5.03941C9.94046 3.92735 11.9414 3.33824 14.0001 3.33824C19.8798 3.33824 24.6619 8.12135 24.6619 14C24.6619 19.8797 19.8798 24.6628 14.0001 24.6628C8.12044 24.6628 3.33733 19.8797 3.33733 14C3.33733 11.9609 3.91507 9.97755 5.00956 8.26708C5.25347 7.88468 5.14185 7.37722 4.75945 7.13331C4.37808 6.8894 3.87063 7.00102 3.62775 7.38239C2.36479 9.35744 1.69714 11.6477 1.69714 14C1.69714 20.785 7.21508 26.303 14.0001 26.303C20.7841 26.303 26.3031 20.785 26.3031 14C26.3031 7.21703 20.7841 1.69702 14.0001 1.69702Z"
          fill="#16DBCC"
        />
      </svg>
    ),
  }
  return (
    <div className="flex items-center space-x-[15px]">
      <div
        className={"w-[55px] h-[55px] rounded-full flex items-center justify-center"}
        style={{ backgroundColor: iconBg }}
      >
        {paymentFrom[from]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-inter text-base font-medium text-[#232323] truncate">{description}</p>
        <p className="font-inter text-[15px] text-[#718EBF] truncate">{date}</p>
      </div>
      <span
        className={`ml-auto font-inter text-base font-medium ${
          isExpense ? 'text-[#FF4B4A]' : 'text-[#41D4A8]'
        }`}
      >
        {formattedAmount}
      </span>
    </div>
  )
}

export default TransactionItem
