import { Separator } from "@/components/ui/separator";
import { ChromeOutlined, InstagramOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <footer className="mt-20">
      <Separator className="w-full " />
      <div className="flex flex-col">
        <div className="my-8 text-center text-gray-900 dark:text-gray-300"> 
          Criado por Daniel Herênio
          <div className="text-center mt-2 text-gray-900 dark:text-gray-300">
            Siga-nos nas redes sociais para ficar por dentro!
            <div className="text-center mt-2 text-gray-900 dark:text-gray-300">
              <a
                href="https://www.instagram.com/daniel_herenio?igsh=MW0xMXVid2syeDI4Mg=="
                className="mr-2" target="_blank"
              >
                <InstagramOutlined style={{ fontSize: "25px" }} />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <ChromeOutlined style={{ fontSize: "25px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
