// icon:bxs-error | Boxicons https://boxicons.com/ | Atisa
import * as React from 'react'

function ErrorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      height='1em'
      width='1em'
      {...props}
    >
      <path d='M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 003 21h18a.998.998 0 00.883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z' />
    </svg>
  )
}

export default ErrorIcon
