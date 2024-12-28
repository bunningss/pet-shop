import { DataCell } from "@/components/data-cell";
import { Icon } from "@/components/icon";
import { Title } from "@/components/title";
import { Suspense } from "react";

async function ProfileData() {
  return (
    <>
      <div className="flex justify-between items-center mb-4 md:mb-1">
        <Title title="Johnny Spence" />
        {/* <UpdateProfile data={res.response?.payload} /> */}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
        <div className="flex items-center gap-2">
          <Icon name="map-pin-house" size={20} />
          <p>Bangladesh</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="mail" size={20} />
          <p>spence@mail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="badge-check" size={20} />
          <p>Member since {new Date().toDateString()}</p>
        </div>
      </div>

      <div className="flex flex-col-reverse mt-4 mb-4 md:grid md:grid-cols-2">
        <div className="pt-2 pb-2 pl-0 pr-0 flex flex-col gap-x-0 gap-y-4 md:gap-y-8">
          <DataCell dataName="gender" dataValue={"-----"} />
          <DataCell dataName="birthdate" dataValue={"-----"} />
          <DataCell dataName="phone number" dataValue={"-----"} />
          <DataCell dataName="coupon code" dataValue={"-----"} />
        </div>
      </div>
    </>
  );
}

export default async function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProfileData />
    </Suspense>
  );
}
