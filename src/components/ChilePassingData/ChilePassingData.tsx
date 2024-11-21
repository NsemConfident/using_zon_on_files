import React from 'react';
import { UseFormSetValue, UseFormGetValues } from 'react-hook-form';

type ChildComponentProps = {
  index: number;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
};

const ChildComponent: React.FC<ChildComponentProps> = ({
  index,
  setValue,
  getValues,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const currentValues = getValues('childFiles');
    const updatedValues = [...currentValues];
    updatedValues[index] = { file };
    setValue('childFiles', updatedValues); // Update the specific child file input
  };

  return (
    <div>
      <label>File Upload {index + 1}:</label>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default ChildComponent;
