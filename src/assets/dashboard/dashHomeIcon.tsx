import * as React from "react"
import { SVGProps } from "react"

const HelloIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.705 5.564c.523-.366 1.311-.296 1.78.092l-.538-.782c-.433-.618-.278-1.287.34-1.72.62-.433 2.372.729 2.372.729-.437-.624-.355-1.415.269-1.853a1.38 1.38 0 0 1 1.922.34l5.796 8.188-.739 7.16-6.164-2.247-5.377-7.973a1.388 1.388 0 0 1 .34-1.934Z"
      fill="#EF9645"
    />
    <path
      d="M1.5 10.119s-.63-.918.288-1.547c.918-.63 1.547.288 1.547.288l2.92 4.26c.101-.168.211-.334.334-.498l-4.054-5.91s-.629-.918.289-1.547c.917-.63 1.546.288 1.546.288l3.813 5.56c.142-.115.287-.231.437-.345L4.2 4.22s-.63-.917.288-1.546c.917-.629 1.546.288 1.546.288l4.42 6.446c.163-.1.324-.185.485-.277L6.808 3.106s-.63-.917.288-1.546c.917-.629 1.546.288 1.546.288l4.369 6.371.664.97c-2.752 1.887-3.014 5.438-1.442 7.732.314.459.773.144.773.144-1.887-2.753-1.31-5.846 1.442-7.733l-.812-4.061s-.303-1.07.767-1.374c1.07-.303 1.374.767 1.374.767l.937 2.783c.372 1.104.767 2.203 1.29 3.243a6.677 6.677 0 0 1-2.191 8.499 6.677 6.677 0 0 1-9.28-1.73L1.5 10.12Z"
      fill="#FFDC5D"
    />
    <path
      d="M6.675 18.299c-2.224 0-4.473-2.249-4.473-4.473 0-.308-.225-.557-.533-.557-.307 0-.58.249-.58.556 0 3.338 2.25 5.586 5.586 5.586.308 0 .557-.272.557-.58 0-.307-.249-.532-.557-.532Z"
      fill="#5DADEC"
    />
    <path
      d="M3.894 19.388c-1.67 0-2.782-1.113-2.782-2.781a.556.556 0 1 0-1.112 0C0 18.83 1.669 20.5 3.894 20.5a.556.556 0 1 0 0-1.112Zm9.455-17.8a.556.556 0 0 0 0 1.113c2.225 0 4.45 1.996 4.45 4.45a.556.556 0 0 0 1.113 0c0-3.067-2.225-5.562-5.563-5.562Z"
      fill="#5DADEC"
    />
    <path
      d="M16.13.5c-.307 0-.556.226-.556.533 0 .307.25.58.556.58 1.67 0 2.758 1.237 2.758 2.757 0 .307.272.556.58.556.307 0 .533-.249.533-.556C20 2.236 18.355.5 16.13.5Z"
      fill="#5DADEC"
    />
  </svg>
)

export default HelloIcon
