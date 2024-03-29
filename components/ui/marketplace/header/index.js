import { Breadcrumbs } from "@components/ui/common";
import { EthRates, WalletBar } from "@components/ui/web3";

export default function Header() {

  const LINKS = [
    {
      href: '/marketplace',
      value:"Buy"
    },
    {
      href: '/marketplace/courses/owned',
      value:"My Courses"
    },
    {
      href: '/marketplace/courses/manage',
      value:"Manage Courses"
    }
  ]

  return (
    <>
      <div className="py-4">
      <WalletBar />
      </div>
      <EthRates />
      <div className="flex flex-row-reverse py-4 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={LINKS}/>
      </div>
    </>
  );
}
