import styled from "styled-components"
import type { IconType } from "react-icons"
import type { LucideIcon } from "lucide-react"

interface InfoCardProps {
  Icon: LucideIcon | IconType
  title: string
  caption?: string
  href?: string
}

export default function InfoCard({ Icon, title, caption, href }: InfoCardProps) {
  const content = (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">{title}</span>
            {caption && <p className="card-content">{caption}</p>}
          </div>
          <div className="icon-box">
            <Icon size={22} color="#080808" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}

const StyledWrapper = styled.div`
  .parent {
    width: 100%;
    padding: 8px;
    perspective: 1000px;
  }

  .card {
    position: relative;
    padding-top: 36px;
    border-radius: 14px;
    border: 2px solid rgba(255, 215, 0, 0.3);
    transform-style: preserve-3d;
    background: linear-gradient(135deg, #0000 18.75%, #161606 0 31.25%, #0000 0),
      repeating-linear-gradient(45deg, #161606 -6.25% 6.25%, #080808 0 18.75%);
    background-size: 50px 50px;
    background-position: 0 0, 0 0;
    background-color: #080808;
    width: 100%;
    box-shadow: rgba(255, 215, 0, 0.08) 0px 20px 25px -10px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  .card:hover {
    background-position: -80px 80px, -80px 80px;
    transform: rotate3d(0.4, 1, 0, 12deg);
    border-color: rgba(255, 215, 0, 0.6);
  }

  .content-box {
    background: var(--color-primary);
    border-radius: 12px 12px 14px 14px;
    transition: all 0.5s ease-in-out;
    padding: 20px 18px 18px 18px;
    transform-style: preserve-3d;
  }

  .content-box .card-title {
    display: inline-block;
    color: #000000;
    font-size: 1.05rem;
    font-weight: 900;
    font-family: var(--font-display);
    letter-spacing: 0.02em;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 40px);
  }

  .card:hover .content-box .card-title {
    transform: translate3d(0px, 0px, 55px);
  }

  .content-box .card-content {
    margin-top: 6px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #2b2200;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 25px);
  }

  .card:hover .content-box .card-content {
    transform: translate3d(0px, 0px, 50px);
  }

  .icon-box {
    position: absolute;
    top: 18px;
    right: 18px;
    height: 44px;
    width: 44px;
    background: var(--color-primary);
    border: 1px solid #080808;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate3d(0px, 0px, 65px);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 12px 10px -8px;
  }
`