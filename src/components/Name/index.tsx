type PropsType = { label: string };
export default function Name(props: PropsType) {
  return (
    <div className="text-2xl flex items-center justify-around my-4 ">
      <h1 className=" font-bold border-b-2 p-3 md:border-b-4 border-red-600">
        {props.label}
      </h1>
    </div>
  );
}
