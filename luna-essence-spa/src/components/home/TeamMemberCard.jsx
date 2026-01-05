function TeamMemberCard({ member }) {
    return (
        <div className="text-center">
            <div className="mb-4 overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x400/EDE7D9/8B7B6B?text=' + member.name
                    }}
                />
            </div>
            <h3 className="text-h5 font-serif text-neutral-900 mb-1">
                {member.name}
            </h3>
            <p className="text-body-sm font-sans text-neutral-600 mb-2">
                {member.title}
            </p>
            <p className="text-body-sm font-sans text-neutral-500">
                {member.bio}
            </p>
        </div>
    )
}

export default TeamMemberCard