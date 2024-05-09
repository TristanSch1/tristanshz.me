import { Avatar } from "./avatar";

export const Me = () => {
  return (
    <div className={"space-y-4 flex flex-col items-center py-4"}>
      <Avatar
        src={"/images/me.jpg"}
        alt={"Me"}
        width={200}
        height={200}
        className={"w-40 h-40"}
      />
      <h1 className={"title-1"}>Tristan Shz</h1>
    </div>
  );
};
