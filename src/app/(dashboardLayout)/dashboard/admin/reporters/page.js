import DashboardBanner from '@/components/DashboardComponents/DashboardBanner';
import { GetAllReporters } from '@/services/GetAllNews'
import Image from 'next/image'

const Reporters = async () => {
  const reporters = await GetAllReporters();
  // console.log(reporters);

  return (
    <div className="overflow-x-auto p-3">
      <DashboardBanner text={`Brave Reporters - ${reporters?.length}`} />
      <div className="border border-cyan-500 mt-5 p-3 rounded-lg">
        <table className="table table-sm">
          <thead className="">
            <tr>
              <th>Index</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className="">
            {reporters &&
              reporters?.map((reporter, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="">
                      <div className="avatar mask mask-squircle w-12 h-12">
                        <Image width={20} height={20} src={reporter?.img || "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} alt={reporter?.name} />
                      </div>
                    </div>
                  </td>
                  <td>{reporter?.name}</td>
                  <td>{reporter?.email}</td>
                  <td>{reporter?.role}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Reporters