import "../../index.css";
import ProfileModal from "../UI/ProfileModal";



export function MyProfile({ items }) {
  return (
    <>
      <div>
        {items.map(item => (
          <ProfileModal
            key={item.id}
            name={item.name}
            mail={item.mail}
            usr={item.usr}
            taskCompleted={item.taskCompleted}
            taskRemaining={item.taskRemaining}
            courses={item.courses}
            isOpen={true} // Asegúrate de que el modal esté abierto
            onClose={() => {}} // Asegúrate de tener una función onClose válida
          />
        ))}
      </div>
    </>
  );
}

