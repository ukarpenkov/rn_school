import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgComponent = () => (
    <Svg width={22} height={20} fill="none">
        <Path
            stroke="#AFB2BF"
            strokeWidth={1.5}
            d="M2.892 16.885 1.42 7.441c-.144-.92.937-1.52 1.641-.91l2.444 2.11a1 1 0 0 0 1.558-.329l3.033-6.404a1 1 0 0 1 1.808 0l3.033 6.404a1 1 0 0 0 1.558.329l2.444-2.11c.704-.61 1.785-.01 1.641.91l-1.472 9.444A2.5 2.5 0 0 1 16.638 19H5.362a2.5 2.5 0 0 1-2.47-2.115Z"
        />
    </Svg>
)
export default SvgComponent
