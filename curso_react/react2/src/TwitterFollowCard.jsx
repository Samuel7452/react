import { useState } from "react" 

export function TwitterFollowCard({children='unknown', following}) {
    const [isFollowing, setIsFollowing] = useState(following)
    const imageSource = `/src/assets/${children}.png`
    const imageAlt = `/src/assets/unknown.png`
    const userName = `@${children}`
    const text = isFollowing ? 'Sigiendo' : 'Seguir'
    const buttonClasName = isFollowing ? 'followButton is-following': 'followButton'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='usersCard'>
            <header className='usersCardHeader'>
                <img className='avatarImage' src={imageSource} alt={imageAlt} />
                <div className='usersDiv'>
                    <strong>{children}</strong>
                    <span className='usersSpan'>{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClasName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )

}