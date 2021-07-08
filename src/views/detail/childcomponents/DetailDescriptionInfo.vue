<template>
	<div class="detail-description-info">
		<div class="size">
			<div class="size-title">
				<div class="title-one">商品尺码</div>
				<div class="title-two">SIZE</div>
			</div>
			<hr />
			<div class="size-explain">尺码对照表:</div>
			<table border="0" cellspacing="0" cellpadding="0" >
				<tr class="table-key"><td>123</td><td>123</td><td>123</td></tr>
				<tr class="table-value"><td>321</td><td>321</td><td>321</td></tr>
				<tr class="table-value"><td>321</td><td>321</td><td>321</td></tr>
				<tr class="table-value"><td>321</td><td>321</td><td>321</td></tr>
				<tr class="table-remind"><span class="table-remind-one">温馨提示:</span><span>衣服尺寸偏大请查看尺码表，建议选择偏小一码</span></tr>
				<tr class="table-value"><td>查看更多</td></tr>
			</table>
			
		</div>
		<div class="delalt">
			<div class="delalt-title">
				<div class="title-one">商品尺码</div>
				<div class="title-two">SIZE</div>
			</div>
			<table class="table-x" border="0" cellspacing="0" cellpadding="0" >
				<div>
					<tr class="table-key-x"><td>123</td><td>123</td><td>123</td></tr>
					<tr class="table-value-x"><td>321</td><td>321</td><td>321</td></tr>
				</div>
				<div>
					<tr class="table-key-x"><td>123</td><td>123</td><td>123</td></tr>
					<tr class="table-value-x"><td>321</td><td>321</td><td>321</td></tr>
				</div>
				
				<tr class="table-value-x"><td>查看更多</td></tr>
			</table>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"DetailDescriptionInfo",
		methods:{
			
		},
		data(){
			return {
				goodTwoDescription: {
					"size": {
						"name": "尺码对照表:",
						"key": ["尺码", "号型", "肩宽", "胸围", "衣长", "袖长", "下摆围"],
						"value": [
							["S", "155/80A", "36", "86", "54", "13.5", "86"],
							["M", "160/84A", "37", "90", "56", "14", "90"],
							["L", "165/88A", "38", "94", "56", "14.5", "94"]
						],
						"温馨提示:": "A表示一般体型"
					},
					"detalt": [
						["弹性", "无弹"],
						["衣长", "常规"],
						["风格", "简约风,小清新,休闲"],
						["适用季节", "夏"],
						["版型	", "常规"],
						["厚薄", "常规"],
						["适用场合", "休闲"],
						["领型", "圆领"]
					]
				},
			}
		},
	
	}
</script>

<style scoped="">
	.detail-description-info{
		margin: 0px;
		padding: 0px;
	}
	.size-title .delalt-title{
		display: flex;
	}
	.title-one,.title-two{
		display: inline-block;
		
	}
	.title-one{
		font-size: 20px;
		color: deeppink;
		margin: 0 5px;
	}
	.title-two{
		font-size: 20px;
		padding-top: 2px;
	}
	
	.size-explain{
		color: black;
		font-style: inherit;
		margin-bottom: 5px;
	}
	table{
		width: 96%;
		text-align: center;
		border-collapse:collapse;
		
	}
	tr{
		display: flex;
		height: 30px;
		line-height: 30px;
	}
	td{
		flex: 1;
	}
	.table-key{
		background-color: #A3A3A5;
	
		
	}
	.table-value{
		
	}
	.table-value td{
		border: black solid 1px;
	}
	.table-remind{
		text-align: left;
		border: black solid 1px;
	}
	
	.table-remind-one{
		color: deeppink;
	}
	.table-x{
		display: flex;
	}
	.table-key-x ,.table-value-x{
		float: left;
		
	}
	.table-key-x td,.table-value-x td{
		width: 100%;

		
	}
	.table-key-x {
		background-color: #A3A3A5;
		color: #333333;
		
	}
	.table-key-x td{
		width: 100%;
	}
	.table-value-x{
		
	}
		
</style>
