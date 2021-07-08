
const DetailOne = () => import('@/views/detail/DetailOne.vue')
const DetailTwo = () => import('@/views/detail/DetailTwo.vue')
const DetailThree = () => import('@/views/detail/DetailThree.vue')
const DetailFour = () => import('@/views/detail/DetailFour.vue')


const goodPageRouter = [
	{
		path: '/detailone/:id',
		name: 'detailone',
		component: DetailOne
	},
	{
		path: '/detailtwo/:id',
		name: 'detailtwo',
		component: DetailTwo
	},
	{
		path: '/detailthree/:id',
		name: 'detailthree',
		component: DetailThree
	},
	{
		path: '/detailfour/:id',
		name: 'detailfour',
		component: DetailFour
	},
]
export default goodPageRouter


