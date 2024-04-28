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
            className={`w-full min-h-full p-1 mt-1  font-shone rounded-none text-xl border-4 marketbordergradient hover:h-full hover:bg-marketgradient2 hover:text-white  text-black`}
          >
            Quick Login
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px] w-4/5 flex flex-col justify-center items-center gap-10">
            <DialogHeader>
              <DialogTitle className="mb-4">Quick Login SSO User</DialogTitle>

              <div className="flex overflow-x-auto space-x-4 ">
                {personas
                  .filter((persona) => persona.personaname !== user)
                  .map((persona) => (
                    <div
                      key={persona.id}
                      className="flex flex-col items-center mr-2 cursor-pointer flex-shrink-0"
                    >
                      <img
                        src={persona.personaimage}
                        className="w-20 h-20 rounded-full"
                        onClick={() => personaClicked(persona)}
                        alt={persona.personaname}
                      />
                      <p className="text-xs text-center mt-2">{persona.personaname}</p>
                      <p className="text-xs text-center mt-2">{persona.personatype}</p>
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
