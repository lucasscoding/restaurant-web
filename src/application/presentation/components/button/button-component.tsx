import './button-component.css';

type Props = {
  title: string;
  subtitle: string;
  onClick: React.MouseEventHandler;
};

export const Button: React.FC<Props> = (props: Props) => {
  return (
    <button onClick={props.onClick} className={'rank-button'}>
      <h3>{props.title}</h3>
      <span>{props.subtitle}</span>
    </button>
  );
};
