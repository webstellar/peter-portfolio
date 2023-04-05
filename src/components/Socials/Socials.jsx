import * as React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"

import Linkedin from "../../images/my-linkedin.svg"
import Discord from "../../images/my-discord.svg"
import Whatsapp from "../../images/my-whatsapp.svg"
import Twitter from "../../images/my-twitter.svg"

const Socials = () => {
  const {
    wpPage: { aboutMe },
  } = useAboutQuery()

  const socialIcons = aboutMe?.socials
  const socials = [Linkedin, Twitter, Whatsapp, Discord]

  let socialCloud = socialIcons.map((item, icon, i) => {
    return {
      key: i,
      url: item.url,
      social: item.social,
      icon: socials[icon],
    }
  })

  return (
    <div className="grid grid-cols-2 gap-6">
      {socialCloud.map((item, i) => (
        <div key={i} className="mb-12">
          <a href={item.url} className="no-underline">
            <img src={item.icon} className="px-6" alt={item.social} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Socials
