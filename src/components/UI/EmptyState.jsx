import PropsTypes from "prop-types";
import { X } from "lucide-react";

export function EmptyState({ icon: Icon, title, message }) {
    return (
        <div className="grid h-[90%] text-center m-auto py-6">
        <Icon size={46} className="m-auto mb-4 text-clr-light-gray dark:text-clr-light-gray" />
        <section>
            <h3 className="text-clr-dark-gray dark:text-white">{title}</h3>
            <p className="text-clr-dark-gray/80 dark:text-clr-light-gray">{message}</p>
        </section>
        </div>
    );
}

EmptyState.defaultProps = {
    icon: X,
    title: "",
    message: "No content available",
};

EmptyState.propTypes = {
    icon: PropsTypes.elementType,
    title: PropsTypes.string,
    message: PropsTypes.string.isRequired,
};
