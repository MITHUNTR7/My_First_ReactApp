
import {Link} from 'react-router-dom'

const Notfound = () => {
    return ( 
        <div className="not-found">
        <h2>Sorry</h2>
        <p>Page does not exist...</p>
        <Link to="/">Back to Home page</Link>
        
        </div>
        
        
        
     );
}
 
export default Notfound;