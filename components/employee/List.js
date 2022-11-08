import useToDoListState from "../../hooks/to-do-list/useToDoListState";

function List({ store }) {
  const { isLoading, tasks, toggleStatus, removeTask } =
    useToDoListState(store);

  const handleChange = (id, title, isCompleted) => {
    toggleStatus({
      id,
      title,
      isCompleted,
    });
  };

  return (
    <ul className="list-group">
      {isLoading && tasks.length === 0 ? (
        <li className="list-group-item text-center">Loading...</li>
      ) : (
        <>
          {tasks.length > 0 ? (
            tasks.map(({ id, title, isCompleted }) => {
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

export default List;
