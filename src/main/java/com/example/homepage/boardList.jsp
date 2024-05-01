<html lang="ko">
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<head>
	<%@ include file="../../_inc/tit.jsp" %> 
</head>
<script>
function fnSubmit(action, pageNo) {
	if(action != "") {
		$("#schFrm").attr("action", action);
	}
	$("#pageIndex").val(pageNo);
	$("#schFrm").submit();
}

</script>
<body>

	  <%@ include file="../../_inc/header2.jsp" %>  

<c:if test="${menuMap.menuId ne 'surveyList'}">
	<div id="contents" class="depth">
		<div class="cont">
			<div class="h_flex">
				<h3>${menuMap.menuName }</h3>
				<ul class="history">
					<li class="home">Home</li>
					<li>알림</li>
					<li>${menuMap.menuName }</li>
				</ul>
			</div>

			<!-- 검색박스 -->
			
			<form:form id="schFrm" modelAttribute="boardVO" method="get">
				<form:hidden path="pageIndex"/>
				<form:hidden path="bbsIdx"/>
			
				<div class="search_top">
					<ul class="notice">
						<li>
							<p class="tit">분류</p>
							<label for="searchConditionID" style="font-size:0; display:none;">검색영역</label>	
							<label for="searchKeywordID" style="font-size:0; display:none;">검색어입력</label>	
							<div class="search_box flex">
								<form:select path="searchCondition" class="searchCondition" id="searchConditionID">
										<form:option value="all">전체</form:option>
										<form:option value="bbsTitle">제목</form:option>
										<form:option value="bbsCont">내용</form:option>
								</form:select>
								
								<form:input path="searchKeyword" class="info_in" id="searchKeywordID" title="검색어 입력" placeholder="검색어를 입력하세요."/>

							</div>
							<p class="search_btn"><button href="#" onclick="fnSubmit('', 1);">검색</button></p>
						</li>
					</ul>
				</div>
			</form:form>
			<!-- // 검색박스 // -->


			<div class="total">
				<p>총 <b>${paginationInfo.totalRecordCount}</b>개의 게시글이 있습니다.</p>
			</div>
<!-- 

{bbsIdx=1, bcfIdx=5, bbsTitle=ICT벤처 M&A 역량강화 교육 프로그램 수요조사, bbsViewCnt=0, secretYn=N, noticeYn=N, bbsPw=null, delYn=N, regAdmYn=N, exposureYn=Y, regId=, regIdx=0, regName=김담당, regDate=2022-09-26 14:54:14.0, fileCnt=0, commentCnt=0, filUsrName=null, filSvrName=null, bcfId=notice, regMName=September, regDay=26, regYear=2022, regDiff=8}

 -->
<!--@@@@@ 게시판 @@@@-->
			<ul class="basic_list nt">
				<li class="cate">
					<p class="num">NO</p>
					<c:if test="${menuMap.menuIdx eq 17}"> <p class="menu">분류</p> </c:if>
					<p class="tit">제목</p>
					<!-- <p class="file">첨부</p> -->
					<p class="name">등록자</p>
					<p class="date">등록일</p>
				</li>
				<!-- 
				1) 게시글 기본 노출갯수 10개
				2) 중요 게시글 기능이 있을 경우 li에 클래스 notice를 넣어주세요

					<li class="notice" onclick="location.href='/${siteCd}/notice/${menuMap.menuId}/view.do'">
						<p class="num"></p>
						<p class="tit"><a href="#">ICT 벤처 M&A 역량강화 교육 참여 신청 안내 (무료교육/오프라인)</a><span class="new">N</span></p>
						<p class="name">김소하</p>
						<p class="date">2021.04.08</p>
					</li>
				 -->
				 
				
				 <c:forEach var ="result" items="${resultList }" varStatus="status">
				 <c:set var="itemCnt" value="${paginationInfo.totalRecordCount - paginationInfo.firstRecordIndex - status.index }"/>
					<li onclick="location.href='/${siteCd}/board/${bcfId}/boardView.do?bbsIdx=${result.bbsIdx }'">
							<p class="num" >${ itemCnt }</p>
							<c:if test="${menuMap.menuIdx eq 17}"> 
								<p class="menu">
									<c:choose>
										<c:when test="${result.pressCate eq 'A'}">보도자료</c:when>
										<c:when test="${result.pressCate eq 'B'}"> 기고</c:when>
										<c:when test="${result.pressCate eq 'C'}"> 논평</c:when>
										<c:when test="${result.pressCate eq 'D'}"> 웹툰</c:when>
										<c:when test="${result.pressCate eq 'E'}"> 뉴스</c:when>
									</c:choose>
								</p> 
							</c:if>
							<p class="tit"><a href="#"><span>${result.bbsTitle }</a>  ${(result.regDiff le 3)?' <span class="new">N</span> ': '' } </p> <!-- 최신글 new 아이콘이 -->
							<!-- <p class="file"><span class="img"></span></p> -->
							<p class="name">${result.regName }</p>
							<p class="date">${result.nregDate }</p>
						</li>
				 </c:forEach>
				<!-- 개발 : 등록된 글이 없을 시 노출되는 소스 -->
				<c:if test="${empty resultList}">
					<li class="nodata">
						<p>등록된 게시글이 없습니다.</p>
					</li>
				</c:if>
				<!-- <li class="nodata">등록된 게시글이 없습니다.</li> -->
			</ul>


 			<!-- 
			페이지네이션 
			PC에서는 숫자 최대 10개 까지 / 모바일에서는 숫자 5개 까지만 노출되게 해주세요
			-->
			<!-- <p class="pagenation">
				<a href="#" class="first"></a>
				<a href="#" class="prev"></a>
				<a href="#" class="on">1</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">5</a>
				
				<a href="#">6</a>
				<a href="#">7</a>
				<a href="#">8</a>
				<a href="#">9</a>
				<a href="#">10</a>
				
				<a href="#" class="next"></a>
				<a href="#" class="last"></a>
			</p> -->
			<p class="pagenation">
				<ui:pagination paginationInfo="${paginationInfo}" type="image" jsFunction="fnLinkPage"/>
			</p>



		</div>
	</div>
</c:if>

<c:if test="${menuMap.menuId eq 'surveyList'}">
	<div id="contents" class="depth">
		<div class="cont">
			<div class="h_flex">
				<h3>${menuMap.menuName }</h3>
				<ul class="history">
					<li class="home">Home</li>
					<li>알림</li>
					<li>${menuMap.menuName }</li>
				</ul>
			</div>

			<!-- 검색박스 -->
			
			<form:form id="schFrm" modelAttribute="boardVO" method="get">
				<form:hidden path="pageIndex"/>
				<form:hidden path="bbsIdx"/>
			
				<div class="search_top">
					<ul class="notice">
						<li>
							<p class="tit">분류</p>
							<label for="searchConditionID" style="font-size:0; display:none;">검색영역</label>	
							<label for="searchKeywordID" style="font-size:0; display:none;">검색어입력</label>	
							<div class="search_box flex">
								<form:select path="searchCondition" class="searchCondition" id="searchConditionID">
										<form:option value="all">전체</form:option>
										<form:option value="bbsTitle">제목</form:option>
								</form:select>
								
								<form:input path="searchKeyword" class="info_in" id="searchKeywordID" title="검색어 입력" placeholder="검색어를 입력하세요." onkeyup="if (window.event.keyCode == 13) {fnSubmit('',1);}"/>

							</div>
							<p class="search_btn"><button href="#" onclick="fnSubmit('', 1);">검색</button></p>
						</li>
					</ul>
				</div>
			</form:form>
			<!-- // 검색박스 // -->


			<div class="total">
				<p>총 <b>${paginationInfo.totalRecordCount}</b>개의 게시글이 있습니다.</p>
			</div>
<!-- 

{bbsIdx=1, bcfIdx=5, bbsTitle=ICT벤처 M&A 역량강화 교육 프로그램 수요조사, bbsViewCnt=0, secretYn=N, noticeYn=N, bbsPw=null, delYn=N, regAdmYn=N, exposureYn=Y, regId=, regIdx=0, regName=김담당, regDate=2022-09-26 14:54:14.0, fileCnt=0, commentCnt=0, filUsrName=null, filSvrName=null, bcfId=notice, regMName=September, regDay=26, regYear=2022, regDiff=8}

 -->
<!--@@@@@ 게시판 @@@@-->
			<ul class="basic_list nt">
				<li class="cate">
					<p class="num" style="width:8%;">NO</p>
					<p class="tit">설문명</p>
					<p class="sur_period">설문기간</p>
					<p class="state">상태</p>
				</li>
				 <c:forEach var ="result" items="${resultList }" varStatus="status">
				 <c:set var="itemCnt" value="${paginationInfo.totalRecordCount - paginationInfo.firstRecordIndex - status.index }"/>
					
					<c:choose>
						<c:when test="${result.surveyYn eq 'N'}">
							<li onclick="location.href='/${siteCd}/board/${bcfId}/boardView.do?bbsIdx=${result.surIdx }'">
						</c:when>
						<c:when test="${result.surveyYn eq 'Y'}">
							<li onclick="alert('이미 참여한 설문입니다.');">
						</c:when>
					</c:choose>
							<p class="num" style="width:8%;">${ itemCnt }</p>
							<p class="tit"><a href="#"><span>${result.surTitle }</a></p> 
							<p class="sur_period">${result.surSdate } 부터 ~ ${result.surEdate } 까지</p>
							<p class="state">
								<c:choose>
									<c:when test="${result.surveyYn eq 'Y'}">
										<span class="ok">참여</span>
									</c:when>
									<c:when test="${result.surveyYn eq 'N'}">
										<span class="ing">미참여</span>
									</c:when>
								</c:choose>
							</p>
						</li>
				 </c:forEach>
				<c:if test="${empty resultList}">
					<li class="nodata">
						<p>등록된 게시글이 없습니다.</p>
					</li>
				</c:if>
			</ul>
			
			<p class="pagenation">
				<ui:pagination paginationInfo="${paginationInfo}" type="image" jsFunction="fnLinkPage"/>
			</p>
			
		</div>
	</div>
</c:if>

	
 <%@ include file="../../_inc/footer2.jsp" %>  
</body>
</html>