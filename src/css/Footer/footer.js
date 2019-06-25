import styled from 'styled-components'
const Div = styled.div`
		width:100%;
		height:100%;
		border:1px solid red;
		ul{
			width:100%;
			height:.96rem;
			position:fixed;
			bottom:0;
			display: flex;
			justify-content: space-between;
			background: #fff;
			z-index: 10;
			.active{
				color:yellow;
			}
			a{
				width: 100%;
				height: 100%;
				li{
					width: 1rem;
					height: .96rem;
					margin: 0 auto;
					span{
						display:block;
						width: 100%;
						height: .48rem;
						font-size: .4rem;
						text-align: center;
    					line-height: .48rem;
					}
					p{
						width: 100%;
						height: .48rem;
						font-size: .3rem;
						text-align: center;
    					line-height: .48rem;
					}
				}
			}
		}
`
export default Div;