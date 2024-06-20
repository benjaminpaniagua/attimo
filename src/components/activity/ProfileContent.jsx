import { CardProfile } from "../../components/UI/CardProfile";
import { CardTasks } from "../../components/UI/CardTasks";
import { useEditProfile } from "../hooks/useModal";
import { ModalButtons } from "../../components/UI/ModalButtons";
import EditProfileModal from "./EditProfileContent";
import { useFetchActivities } from "../hooks/useFetchActivities";

export function ProfileContent() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { editModalIsOpen, closeEditModal, handleEditProfileClick } =
    useEditProfile();
  const userId = user ? user.id : null;

  const { data } = useFetchActivities(userId);
  const activeActivities = data.filter(
    (activity) => activity.status === "Active"
  );
  const inactiveActivities = data.filter(
    (activity) => activity.status === "Inactive"
  );

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
      <CardTasks
        taskCompleted={inactiveActivities.length}
        taskRemaining={activeActivities.length}
      />
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
