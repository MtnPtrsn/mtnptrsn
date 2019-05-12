import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import theme from '../styling/theme'
import { styledFlexCenter } from '../styling/utils'

import imageMenu from '../images/menu.svg'
import imageClose from '../images/close.svg'
import { Link } from 'gatsby'

const FABWrapper = styled.div<{ isExpanded: boolean }>`
  ${styledFlexCenter};
  position: fixed;
  bottom: ${theme.spacing[5]};
  right: ${theme.spacing[5]};
  height: 50px;
  width: ${props => (props.isExpanded ? 'auto' : '50px')};
  border-radius: 50px;
  background-color: ${theme.colors.primary};
`

const MenuItem = styled.li`
  color: white;
  margin: 0 6px 4px 6px;
`

class FABMenu extends Component {
  state = {
    isExpanded: false,
  }

  onClickToggleButton = () =>
    this.setState({ isExpanded: !this.state.isExpanded })

  renderMenu = () => {
    const { isExpanded } = this.state

    if (!isExpanded) return null

    return (
      <ul
        css={css`
          display: flex;
          align-items: center;
          padding-left: 14px;
          height: 100%;
        `}
      >
        {['Home', 'About'].map(menuItem => (
          <MenuItem>
            <Link
              css={css`
                color: white;
                font-size: 0.85em;
              `}
              to="/"
            >
              {menuItem}
            </Link>
          </MenuItem>
        ))}
      </ul>
    )
  }

  render() {
    const { isExpanded } = this.state

    return (
      <FABWrapper isExpanded={isExpanded}>
        {this.renderMenu()}

        <button
          css={css`
            background: transparent;
            border: none;
            outline: 0;
            margin-right: ${isExpanded ? '6px' : '0'};

            cursor: pointer;
          `}
          onClick={this.onClickToggleButton}
        >
          <img
            css={css`
              color: white;
            `}
            src={isExpanded ? imageClose : imageMenu}
          />
        </button>
      </FABWrapper>
    )
  }
}

export default FABMenu
