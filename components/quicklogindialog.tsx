import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext, useState } from "react";
import LoginContext from "@/utils/contexts/login";

interface Persona {
  id: string | number;
  personaname: string;
  personatype: string;
  personaimage: string;
  personaemail: string;
}

interface QuickLoginDialogProps {
  personas: Persona[];
}

export function QuickLoginDialog({ personas }: QuickLoginDialogProps) {
  const { user, loginUser } = useContext(LoginContext);
  const [isDialogOpen] = useState(true);

  const personaClicked = (persona: Persona) => {
    loginUser(persona.personaname, persona.personaemail);
  };
  return (
    <>
      {isDialogOpen ? (
        <Dialog>
          <DialogTrigger
            className={`w-full min-h-full p-1 mt-1  font-shone rounded-none text-xl border-4
             marketbordergradient hover:h-full hover:bg-gradient-experimentation-grey hover:text-white  text-black`}
          >
            Quick Login
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px] w-4/5 flex flex-col justify-center items-center gap-10">
            <DialogHeader>
              <DialogTitle className="mb-4 text-center">Quick Login SSO User</DialogTitle>

              <div className="flex overflow-x-auto space-x-4 ">
                {personas
                  .filter((persona) => persona.personaname !== user)
                  .map((persona, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center mr-2 cursor-pointer flex-shrink-0 "
                    >
                      <img
                        src={persona.personaimage}
                        className="w-20 h-20 rounded-full hover:brightness-125"
                        onClick={() => personaClicked(persona)}
                        alt={persona.personaname}
                      />
                      <p className="mt-2 text-xs sm:text-sm md:text-base text-center font-bold font-sohnelight">{persona.personaname}</p>
                      <p className="mt-2 text-xs sm:text-sm md:text-base text-center font-bold font-sohnelight">{persona.personatype}</p>
                    </div>
                  ))}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}
