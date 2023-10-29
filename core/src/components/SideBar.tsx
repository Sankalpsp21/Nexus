import { faker } from '@faker-js/faker';

export default function SideBar() {
  return (
    <div className="relative float-left w-64 bg-100 text-white p-4 opacity-100 overflow-hidden sm:opacity-100 sm:static sm:w-64 sm:block sm:top-0 sm:left-0 sm:bottom-0 sm:overflow-y-auto sm:overflow-x-hidden sm:flex-shrink-0 sm:transition-all sm:duration-300">
      <div className="h-full max-h-[84.3vh] overflow-y-auto no-scrollbar">
        <h2 className="text-lg font-bold text-800">Active Nexus Users</h2>
        <ul>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
            <li key={item} className="flex items-center space-x-4 space-y-2">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={faker.image.avatar()} alt="" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold">
                  {faker.person.firstName()} {faker.person.lastName()}
                </div>
                <div className="text-xs text-800">{faker.internet.userName()}</div>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold text-800">Active Nexus Rooms</h2>
        <ul>
          {Array.from({ length: 7 }, (_, index) => index + 1).map((item) => (
            <>
              <li key={item} className="flex justify-start hover:bg-200 rounded-md px-4 py-4 w-fit sm:w-full">
                <div className="flex flex-row">
                  <h1 className="text-xl font-semibold my-2 mr-4 text-950">{faker.word.noun(3)}</h1>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-10">
                        <img src={faker.image.avatar()} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-10">
                        <img src={faker.image.avatar()} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-10">
                        <img src={faker.image.avatar()} />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-10 bg-300 text-neutral-content">
                        <span>+{faker.datatype.number({ min: 1, max: 19 })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
