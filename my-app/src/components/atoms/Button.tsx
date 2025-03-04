type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="ml-auto mr-5 px-7 mt-6 inline-flex h-12 items-center justify-center rounded-md bg-sky-700 font-medium text-neutral-50 transition active:scale-110"
    >
      {props.text}
    </button>
  );
};
