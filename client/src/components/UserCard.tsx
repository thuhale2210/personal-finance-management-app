import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    financialGoals?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pagetype: string,
}

const UserCard = function ({ user, pagetype }: Props) {
    console.log(user)

    const userImage = user?.image ? (
        <Image
            className="rounded-full mx-auto mt-8"
            src={user?.image}
            width={70}
            height={70}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : (<Image
        className="rounded-full mx-auto mt-8"
        src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        width={70}
        height={70}
        alt="Undefined Profile Pic"
        priority={true}
    />)

    return (
        <section className="flex flex-col gap-4">
            {user?.image ? (userImage) : null}
            {user?.name ? (
                <h1 className="text-base text-center text-primary-white">{user?.name}</h1>
            ) : null}
            {user?.financialGoals ? (
                <div className="text-xs text-center text-primary-white text-wrap">{user?.financialGoals}</div>
            ) : <div className="text-xs text-primary-white italic text-wrap">towards financial freedom</div>}
        </section>
    )
}

export default UserCard