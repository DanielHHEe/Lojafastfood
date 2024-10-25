import { Separator } from "@/components/ui/separator";
import { ChromeOutlined, EnvironmentOutlined, InstagramOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <footer className="mt-20">
      <Separator className="w-full " />
      <div className="flex flex-col">
        <div className="my-8 text-center text-gray-900 dark:text-gray-300"> 
          <div className="font-bold">
             Criado por Daniel Herênio
          </div>
          <div className="text-center mt-2 text-gray-900 dark:text-gray-300">
            Siga nossas redes para ficar por dentro!
            <div className="text-center mt-2 text-gray-900 dark:text-gray-300">
              <a
                href="https://www.instagram.com/daniel_herenio?igsh=MW0xMXVid2syeDI4Mg=="
                className="mr-3" target="_blank"
              >
                <InstagramOutlined style={{ fontSize: "25px" }} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" className="mr-3">
                <ChromeOutlined style={{ fontSize: "25px" }} />
              </a>
              <a href="https://www.google.com.br/maps/place/Sushi+nagai/@-5.5133136,-47.462759,17.25z/data=!4m6!3m5!1s0x92c55f627da8dc1d:0xa25c1c3a52368457!8m2!3d-5.5134566!4d-47.4611689!16s%2Fg%2F11rmn56gm2?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank"><EnvironmentOutlined style={{ fontSize: "25px" }} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
