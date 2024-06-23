import { CardProfile } from "../../components/UI/CardProfile";
import { CardTasks } from "../../components/UI/CardTasks";
import { useEditProfile } from "../hooks/useModal";
import { ModalButtons } from "../../components/UI/ModalButtons";
import EditProfileModal from "./EditProfileContent";
import { useFetchActivities } from "../hooks/useFetchActivities";
import { useFetchGroups } from "../hooks/useFetchGroups";
import { Loading } from "../UI/Loading";

export function ProfileContent() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { editModalIsOpen, closeEditModal, handleEditProfileClick } = useEditProfile();
  const userId = user ? user.id : null;

  // Obtener actividades
  const { data: activitiesData, isLoading: activitiesLoading } = useFetchActivities(userId);
  const activeActivities = activitiesData ? activitiesData.filter((activity) => activity.status === "Active") : [];
  const inactiveActivities = activitiesData ? activitiesData.filter((activity) => activity.status === "Inactive") : [];

  // Obtener grupos
  const { data: groups, isLoading: groupsLoading } = useFetchGroups(userId);

  // Determinar carga completa
  const isLoading = activitiesLoading || groupsLoading;

  return (
    <div>
      <CardProfile
        image={user.image}
        name={user.name}
        lastname1={user.lastname1}
        lastname2={user.lastname2}
        email={user.email}
        username={user.username}
      />
      {isLoading ? (
        <Loading /> // Mostrar el componente Loading mientras se cargan los datos
      ) : (
        <CardTasks
          taskCompleted={inactiveActivities.length}
          taskRemaining={activeActivities.length}
          groups={groups}
        />
      )}
      <div className="justify-center flex">
        <ModalButtons
          onClick={() => {
            handleEditProfileClick();
          }}
          text="Edit Profile"
        />
      </div>
      <EditProfileModal isOpen={editModalIsOpen} onClose={closeEditModal} />
    </div>
  );
}
