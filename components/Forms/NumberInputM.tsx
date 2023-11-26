"use client"; // This is a client component

import { NumberInput } from "@tremor/react";

const NumberInputM= () => {
  return (
  <>
    <NumberInput className="w-full rounded border border-stroke bg-gray py-1.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"/>
  </>
  )
};

export default NumberInputM;