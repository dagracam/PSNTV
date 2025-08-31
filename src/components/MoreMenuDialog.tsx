import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram } from "lucide-react";
import XIcon from "./XIcon"; // Importa il nuovo componente XIcon
import TikTokIcon from "./TikTokIcon"; // Importa il nuovo componente TikTokIcon

interface MoreMenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const MoreMenuDialog: React.FC<MoreMenuDialogProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: "Chi siamo", path: "/about-us" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Preferenze dei cookie", path: "/cookie-preferences" },
    { label: "Contattaci", path: "mailto:redazione@persemprenews.it", external: true },
  ];

  const socialItems = [
    { label: "X", icon: XIcon, path: "https://x.com/PerSempre_News" }, // Usa XIcon
    { label: "Facebook", icon: Facebook, path: "https://www.facebook.com/persemprenews" },
    { label: "Youtube", icon: Youtube, path: "https://www.youtube.com/persemprenews" },
    { label: "Instagram", icon: Instagram, path: "https://www.instagram.com/persemprenews_/" },
    { label: "TikTok", icon: TikTokIcon, path: "https://www.tiktok.com/@persemprenews" }, // Usa TikTokIcon
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-dyad-bg/95 backdrop-blur-sm border-dyad-border p-6 rounded-lg shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-center text-dyad-text">Menu</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            item.external ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-dyad-text hover:bg-dyad-bg/70 hover:text-dyad-link-blue"
                  onClick={onClose}
                >
                  {item.label}
                </Button>
              </a>
            ) : (
              <Link key={item.label} to={item.path} className="w-full">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-dyad-text hover:bg-dyad-bg/70 hover:text-dyad-link-blue"
                  onClick={onClose}
                >
                  {item.label}
                </Button>
              </Link>
            )
          ))}
          <div className="border-t border-dyad-border/50 pt-4 mt-4">
            <h3 className="text-lg font-semibold text-dyad-text mb-3">Seguici sui Social</h3>
            <div className="flex flex-col space-y-2">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-dyad-text hover:bg-dyad-bg/70 hover:text-dyad-link-blue"
                    onClick={onClose}
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.label}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MoreMenuDialog;