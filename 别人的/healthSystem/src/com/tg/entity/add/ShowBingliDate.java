package com.tg.entity.add;

public class ShowBingliDate {
	private int u_id;
	private int d_id;
	private String u_name;
	private int u_age;
	private String u_sex;
	private int m_id;//�ϴ�����id
	private int dia_id;//������Ϣid
	private String cond;//����,������Ѫѹ
	private String state;//����,��:����
	private String report_name;
	private String report;//�������棨��report����ȡ��
	private String d_date;//ҽ�����ʱ��
	
	public String getCond() {
		return cond;
	}
	public void setCond(String cond) {
		this.cond = cond;
	}
	public String getReport_name() {
		return report_name;
	}
	public void setReport_name(String report_name) {
		this.report_name = report_name;
	}
	public int getD_id() {
		return d_id;
	}
	public void setD_id(int d_id) {
		this.d_id = d_id;
	}
	public int getU_id() {
		return u_id;
	}
	public void setU_id(int u_id) {
		this.u_id = u_id;
	}
	public String getU_name() {
		return u_name;
	}
	public void setU_name(String u_name) {
		this.u_name = u_name;
	}
	public int getU_age() {
		return u_age;
	}
	public void setU_age(int u_age) {
		this.u_age = u_age;
	}
	public String getU_sex() {
		return u_sex;
	}
	public void setU_sex(String u_sex) {
		this.u_sex = u_sex;
	}
	public int getM_id() {
		return m_id;
	}
	public void setM_id(int m_id) {
		this.m_id = m_id;
	}
	public int getDia_id() {
		return dia_id;
	}
	public void setDia_id(int dia_id) {
		this.dia_id = dia_id;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getReport() {
		return report;
	}
	public void setReport(String report) {
		this.report = report;
	}
	public String getD_date() {
		return d_date;
	}
	public void setD_date(String d_date) {
		this.d_date = d_date;
	}
	@Override
	public String toString() {
		return "ShowBingliDate [u_id=" + u_id + ", d_id=" + d_id + ", u_name="
				+ u_name + ", u_age=" + u_age + ", u_sex=" + u_sex + ", m_id="
				+ m_id + ", dia_id=" + dia_id + ", cond=" + cond + ", state="
				+ state + ", report_name=" + report_name + ", report=" + report
				+ ", d_date=" + d_date + "]";
	}
	
}
