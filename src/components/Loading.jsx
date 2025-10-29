import { memo } from 'react';
import { useCookies } from 'react-cookie';


function Loading() {
    const [cookies] = useCookies()
    return (
        <>
            {cookies && cookies.loading && <div id="backdrop" >
                
            </div >}
        </>
    )
}
export default memo(Loading)

