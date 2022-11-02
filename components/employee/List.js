import { observer } from "mobx-react-lite";
import { useMainStore } from "../../contexts/MainContext";

function List() {
  const { toDoStore } = useMainStore();
  const { getIsLoading, getTasks, toggleStatus } = toDoStore;

  const handleChange = () => {
    toggleStatus({
      id,
      title,
      isCompleted: !isCompleted,
    });
  };

  return (
    <ul className="list-group">
      {getIsLoading && getTasks.length === 0 ? (
        <li className="list-group-item text-center">Loading...</li>
      ) : (
        <>
          {getTasks.map(({ id, title, isCompleted }) => {
            return (
              <li key={id} className="list-group-item">
                <div className="display-flex">
                  <div>
                    {id} - {title}
                  </div>
                  <div className="float-right">
                    <input
                      type={"checkbox"}
                      onChange={handleChange}
                      checked={isCompleted}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
}

export default observer(List);
