import { currentUser } from "@clerk/nextjs/dist/types/server";

export const checkUser = async () => {
  const { user } = await currentUser();
  if (!user) {
    return null;
    }
    try{
        const loggedInUser db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
        });

        if(loggedInUser){
            return loggedInUser;
        }

        const name = `${user.firstName} ${user.lastName}`;
    } catch(error){}
}
