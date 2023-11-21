import { BRAND } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/coca-cola-48x48.jpg",
    name: "Coca-Cola",
    visitors: 133.5,
    revenues: "5,768",
    sales: "Video",
    conversion: "31/12/2023 | 23:59",
  },
  {
    logo: "/images/brand/velvexlogo-48x48.jpg",
    name: "Velvex",
    visitors: 22.2,
    revenues: "4,635",
    sales: "Banner",
    conversion: "31/12/2023 | 23:59",
  },
  {
    logo: "/images/brand/harpiclogo-48x48.jpg",
    name: "Harpic",
    visitors: 42.1,
    revenues: "4,290",
    sales: "Banner",
    conversion: "31/12/2023 | 23:59",
  },
  {
    logo: "/images/brand/dormanslogo-48x48.jpg",
    name: "Dormans",
    visitors: 51.5,
    revenues: "3,580",
    sales: "Video",
    conversion: "31/12/2023 | 23:59",
  },
  {
    logo: "/images/brand/vaallogo-48x48.jpg",
    name: "VAAL",
    visitors: 43.5,
    revenues: "6,768",
    sales: "Video",
    conversion: "31/12/2023 | 23:59",
  },
];


const TableOne = () => {
  return (
    <Link href="/settings">
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Campaigns
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Brand
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Views Target
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Budget
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Type
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Application Deadline
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Link>
  );
};

export default TableOne;
