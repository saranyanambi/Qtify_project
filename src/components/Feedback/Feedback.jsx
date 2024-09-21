import { width } from '@mui/system';
import styles from './Feedback.module.css';

const Feedback=()=>{
    return(
        <div className={styles.feedbackContainer}>
    <form>
   <div style={{padding:'10px'}}>   
    <input type="text" name="name" placeholder='Name'className={styles.inputs}/>
    </div>
   <div style={{padding:'10px'}}>    
    <input type="email" name="email" placeholder='Email Id' className={styles.inputs}/>
    </div>
   <div style={{padding:'10px'}}>      
    <input type="text" name="subject" placeholder='Subject'className={styles.inputs}/>
    </div>
    <div style={{padding:'10px'}}>      
    <input type="text" name="description" placeholder='Description' className={styles.description}/>
    </div> 
  <div style={{padding:'10px',display: 'flex', justifyContent: 'center'}}>
  <input type="submit" value="Submit" placeholder='Submit Feedback' style={{ width:'100px',height:'30px' ,backgroundColor:' rgba(52, 201, 75, 1)',color:'white',borderColor:'white',borderRadius:'10px'}}/>
  </div>
</form>
</div>
    )
}

export default Feedback