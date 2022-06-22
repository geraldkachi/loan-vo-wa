import { AIalarmbol } from 'arvara-icons';
import { Avatar } from 'arvara';

const Header = () => {
  return (
      <div className="h-14 max-w-screen mb-20">
        <div className="block">
          <div className="float-left">
            <div className="mt-20">
              <p className="sidebar_text">Page Name / Another Name</p>
            </div>
          </div>
          <div className="float-right">
            <div className="mt-5 flex">
              <div className="inline-block mr-16">
                <AIalarmbol />
              </div>

              <div className="flex mr-5">
                <div className="mr-3">
                  <Avatar
                  isActive={true}
                  image={`https://download.cnet.com/a/img/resize/f648f74c5135b3dd536ff519ef0b5f438c2b5e91/catalog/2020/10/06/592f53a6-8f1d-4d5f-a823-3cc6e01cdc4f/imgingest-3443366715884691780.jpg?auto=webp&fit=crop&height=675&width=1200`}
                  size='lg'
                  />
                </div>
                <div className="">
                  <p className="font-bold">Gabriel Inyamah</p>
                  <p className="sidebar_text">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
