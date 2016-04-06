package com.msg.common;

import java.util.List;
/**
 * 分页对象
 * @author dell
 *
 * @param <T>
 */
public class Pager<T> {
	// 总数
	private int totalNum;
	// 每页显示的具体内�?
	private List<T> pageList;

	public int getTotalNum() {
		return totalNum;
	}

	public void setTotalNum(int totalNum) {
		this.totalNum = totalNum;
	}

	public List<T> getPageList() {
		return pageList;
	}

	public void setPageList(List<T> pageList) {
		this.pageList = pageList;
	}

}
