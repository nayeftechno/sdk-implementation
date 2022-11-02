import { observer } from "mobx-react-lite";
import { useMainStore } from "../../contexts/MainContext";

function List() {
  const { toDoStore } = useMainStore();
  const { getIsLoading, getTasks, toggleStatus, removeTask } = toDoStore;

  const handleChange = (id, title, isCompleted) => {
    toggleStatus({
      id,
      title,
      isCompleted,
    });
  };

  return (
    <ul className="list-group">
      {getIsLoading && getTasks.length === 0 ? (
        <li className="list-group-item text-center">Loading...</li>
      ) : (
        <>
          {getTasks.length > 0 ? (
            getTasks.map(({ id, title, isCompleted }) => {
              return (
                <li key={id} className="list-group-item">
                  <div className="display-flex">
                    <div>
                      {id} - {title}
                    </div>
                    <div className=" display-flex float-right ten-px-gap">
                      <input
                        className="cursor-pointer"
                        type={"checkbox"}
                        onChange={() => {
                          handleChange(id, title, !isCompleted);
                        }}
                        checked={isCompleted}
                      />
                      <div
                        className="cursor-pointer twenty-font-size"
                        onClick={() => {
                          removeTask(id);
                        }}
                        title="delete"
                      >
                        X
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="list-group-item text-center">No Tasks Found</li>
          )}
        </>
      )}
    </ul>
  );
}

export default observer(List);
