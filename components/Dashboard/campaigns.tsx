"use client";
import React from "react";
import TableOne from "../Tables/TableOne";
import Link from "next/link";

const Campaigns: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12">
          <Link href="/settings">
            <TableOne />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Campaigns;
