import "../../index.css";
import ProfileModal from "../UI/ProfileModal";


export function MyProfile({ items }) {
    return (
      <>
        <div>
          {items.map(item => (
            <ProfileModal
              key={item.id}
              img={item.img}
              name={item.name}
              mail={item.mail}
              usr={item.usr}
              taskCompleted={item.taskCompleted}
              taskRemaining={item.taskRemaining}
              courses={item.courses} 
              
            />
          ))}
        </div>
      </>
    );
  }
  
  