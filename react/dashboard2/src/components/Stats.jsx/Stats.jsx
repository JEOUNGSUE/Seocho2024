import { visitorData } from '../../constants';
import Card from './Card';

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-4 h-full">
        {visitorData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
