import './stats-component.css';

type Props = {
  title: string;
  stats: number;
};

export const Stats: React.FC<Props> = (props: Props) => {
  return (
    <div className="container-stats red">
      <h2>{props.title}</h2>
      <p>{props.stats}</p>
    </div>
  );
};
