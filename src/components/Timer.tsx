
import { useTimer } from '../components/TimerContext';

export default function Timer(){
  
  const{time} = useTimer()

  const hours = String(Math.floor(time / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');

  return (
    <div style={{ fontSize: "15px", margin: "20px" }}>
    <div><strong>Tiempo:</strong> {hours}h {minutes}m {seconds}s</div>
    </div>
  )
}
