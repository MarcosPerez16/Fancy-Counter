import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const CountButtons = ({ setCount }) => {
  return (
    <div className='button-container'>
      <button className='count-btn'>
        <MinusIcon
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
          className='count-btn-icon'
        />
      </button>
      <button className='count-btn'>
        <PlusIcon
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className='count-btn-icon'
        />
      </button>
    </div>
  );
};

export default CountButtons;
