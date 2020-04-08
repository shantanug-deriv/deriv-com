//TODO: this a temporary way to display these svg
import React from 'react'
import PropTypes from 'prop-types'

const MarketCommoditeisIcon = ({ dynamic_id }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <defs>
            <linearGradient id={dynamic_id} x1="0%" x2="100%" y1="100%" y2="0%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0H64V64H0z" />
            <path
                fill={`url(#${dynamic_id})`}
                d="M4.069 29v17h18.443l.07-.117c.359-.55.96-.883 1.61-.883H28c0-.326.077-.647.224-.936l1.707-3.347V29H32l-.002 8.284c.294-.183.635-.284.99-.284h8.023c.714 0 1.37.41 1.704 1.064l3.06 6c.153.3.225.62.225.937L50.011 45c.714 0 1.37.41 1.704 1.064l3.06 6c.153.3.225.62.225.937L58.011 53c.714 0 1.37.41 1.704 1.064l3.06 6c.499.976.14 2.187-.8 2.704-.279.152-.588.232-.903.232H46.927c-.567 0-1.076-.254-1.429-.658-.137.157-.302.295-.492.404-.289.167-.615.254-.946.254H28.94c-.34 0-.66-.09-.939-.25l-.027.018c-.278.152-.587.232-.902.232H12.927C11.863 63 11 62.105 11 61c0-.326.077-.647.224-.936l3.061-6c.334-.655.99-1.064 1.703-1.064H19c0-.342.085-.677.246-.976L21.427 48H2c-.552 0-1-.448-1-1 0-.513.386-.936.883-.993L2 46V29h2.07zM24.01 55h-8.023l-3.06 6H27l.006-.129L24.011 55zm16.797 0h-8.617l-3.193 5.897L29 61 44.06 61l-3.252-6zm17.203 0h-8.023l-3.06 6h14.144l-3.06-6zm-10.204 0H43.03l2.461 4.54L47.807 55zm-17.838 0h-3.777l1.831 3.59L29.969 55zm2.84-8H24.19l-3.251 6h15.12l-3.252-6zm17.202 0h-8.023l-3.06 6h14.144l-3.06-6zm-10.204 0H35.03l2.461 4.54L39.807 47zm1.204-8h-8.023l-3.06 6h14.144l-3.06-6zM32 1c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L32 3h-.001L32 19h-.016l.103.007c.474.052.85.416.906.875L33 20v8c0 .553-.463 1.001-1.033 1.001H25c-1.824 2.43-4.729 4-8 4s-6.176-1.57-8-4H2.032c-.53 0-.965-.386-1.025-.883L1 27.998l.014-7.98c.001-.545.452-.988 1.012-.998H2L1.999 3l-.116-.007C1.386 2.936 1 2.513 1 2s.386-.936.883-.993L2 1h30zM17 15c-2.972 0-5.565 1.62-6.945 4.026l.007-.012c-.102.177-.198.36-.286.545l-.066.14.066-.14c-.11.23-.21.468-.298.71l-.026.072.026-.072c-.043.12-.084.242-.122.364l.096-.292c-.04.116-.078.233-.114.35l.018-.058c-.032.102-.061.205-.089.308l.071-.25C9.118 21.423 9 22.198 9 23c0 1.606.473 3.102 1.288 4.355.05.077.1.152.153.226l-.153-.226c.066.1.133.2.203.298l-.05-.072c.078.112.16.222.243.33l-.193-.258c.071.098.144.195.219.29l-.026-.032c.147.189.302.37.465.545l.046.05v-.001c.09.094.181.186.275.276.063.06.126.119.191.177l-.19-.177C12.906 30.156 14.854 31 17 31c2.31 0 4.39-.979 5.85-2.544l-.045.049c.17-.18.332-.366.485-.56l.026-.034-.026.033c.075-.095.148-.192.218-.291l-.192.258c.084-.108.165-.218.243-.33l-.05.072c.07-.098.137-.197.203-.298l-.153.226C24.467 26.283 25 24.704 25 23c0-.834-.128-1.637-.364-2.393l-.101-.301c-.079-.22-.166-.435-.263-.644l-.036-.079.036.079c-.102-.222-.213-.438-.334-.648C22.556 16.614 19.966 15 17 15zm.056 2.099l.027.028.241.37C19.774 21.271 21 23.833 21 25.181 21 27.29 19.21 29 17 29s-4-1.71-4-3.818c0-1.391 1.305-4.076 3.916-8.055.008-.011.018-.021.03-.029.034-.022.077-.02.11 0zM7.2 21H3v6l4.833.001C7.297 25.776 7 24.423 7 23c0-.685.069-1.354.2-2zM31 21h-4.2c.131.646.2 1.315.2 2 0 1.423-.297 2.776-.833 4.001L31 27v-6zm-14-.241l-.207.353c-.404.697-.742 1.326-1.015 1.887l-.198.42c-.395.87-.58 1.486-.58 1.763 0 .983.875 1.818 2 1.818s2-.835 2-1.818c0-.306-.229-1.036-.723-2.07-.28-.583-.632-1.244-1.058-1.98L17 20.76zM29.931 3H4.069l-.001 16.018 3.757-.002C9.365 15.476 12.893 13 17 13c4.102 0 7.627 2.47 9.169 6.003L29.93 19l.001-16z"
            />
        </g>
    </svg>
)

MarketCommoditeisIcon.propTypes = {
    dynamic_id: PropTypes.string,
}
export default MarketCommoditeisIcon
