package com.tg.controller;



import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tg.entity.Doctor;
import com.tg.entity.Monitoring;
import com.tg.entity.Title;
import com.tg.entity.User;
import com.tg.entity.add.ShowBaojingDate;
import com.tg.entity.add.ShowBingliDate;
import com.tg.service.DoctorService;
import com.tg.service.MonitoringService;
import com.tg.service.ShowBaojingDateService;
import com.tg.service.ShowBingliDateService;
import com.tg.service.TitleService;
import com.tg.service.UserService;



@Controller

@RequestMapping("/show")
public class ShowDateController {
	
	@Autowired
	private MonitoringService monitoringService; 
	@Autowired
	private ShowBaojingDateService showBaojingDateService;
	@Autowired
	private ShowBingliDateService showBingliDateService;
	@Autowired
	private TitleService titleService;
	@Autowired
	private DoctorService doctorService;
	@Autowired
	private UserService userService;
	@RequestMapping("/showhealth.do")
	public String showhealth(HttpServletRequest request)
	{
		System.out.println("asfdasdf");
		return "a";
	}
	/*================================================�û�ҳ����Ϣ��ʾ=================================== */
	//��ʾ�û�������Ϣ
	@RequestMapping("/showUser.do")
	public String showUser(HttpServletRequest request)
	{
		HttpSession hs= request.getSession(true);
		int u_id=(Integer) hs.getAttribute("u_id");
		
		User us = new User();
		us.setU_id(u_id);
		List<User> UserInfo = userService.getListByentity(us);
		System.out.println(UserInfo);
		request.setAttribute("UserInfos", UserInfo);
		return "/user/gerenxinxi";
	}
	
	//���ݼ��ҳ��������ʾ
	@RequestMapping("/showjiance.do")
	public String showjiance(HttpServletRequest request){
		HttpSession hs= request.getSession(true);
		int u_id=(Integer) hs.getAttribute("u_id");
		List<Monitoring> Monitoring = monitoringService.getList(u_id);
		System.out.println(Monitoring);
		request.setAttribute("Monitorings", Monitoring);
		System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		return "/user/shujujiance";
	}
	//���߲���ҳ��������ʾ
		@RequestMapping("/showUserbingli.do")
		public String showUserbingli(HttpServletRequest request){
			HttpSession hs= request.getSession(true);
			int u_id=(Integer) hs.getAttribute("u_id");//�õ���ǰ���˵�id
			System.out.println("u_id="+u_id);
			ShowBingliDate sbli = new ShowBingliDate();//������д��������
			sbli.setU_id(u_id);
			List<ShowBingliDate> showBingliDate =showBingliDateService.getListByentity(sbli);//�����ݿ��ж�ȡ����
			System.out.println(showBingliDate);
			request.setAttribute("showBingliDates1", showBingliDate);
			System.out.println("showbingli");
			return "/user/binglixinxi";
		}
		//������Ϣ����
		@RequestMapping("/showContext.do")
		public String showContext(HttpServletRequest request)
		{
			HttpSession hs= request.getSession(true);
			int u_id=(Integer) hs.getAttribute("u_id");
			
			Title title = new Title();
			title.setU_id(u_id);
			List<Title> showcontext = titleService.getListByValue(title);
			System.out.println("~~~~~~~~~~��Ϣ��ʾ");
			System.out.println(showcontext);
			request.setAttribute("showcontexts", showcontext);
			return "/user/fabuxinxi";
		}
/*================================================================================================= */
		
		
/*================================================ҽ��ҳ����Ϣ��ʾ=================================== */
	//��ʾҽ��������Ϣ
	@RequestMapping("/showDoctor.do")
	public String showDoctor(HttpServletRequest request)
	{
		HttpSession hs= request.getSession(true);
		int d_id=(Integer) hs.getAttribute("d_id");
		
		Doctor doc = new Doctor();
		doc.setD_id(d_id);
		List<Doctor> DoctorInfo = doctorService.getListByentity(doc);
		System.out.println(DoctorInfo);
		request.setAttribute("DoctorInfos", DoctorInfo);
		return "/doctor/gerenxinxi";
	}
	//������Ϣҳ��������ʾ
	@RequestMapping("/showbaojing.do")
	public String showbaojing(HttpServletRequest request){
		HttpSession hs= request.getSession(true);
		int d_id=(Integer) hs.getAttribute("d_id");//�õ���ǰҽ����id
		
		ShowBaojingDate sbd = new ShowBaojingDate();//������д��������
		sbd.setD_id(d_id);
		List<ShowBaojingDate> showBaojingDate =showBaojingDateService.getListByentity(sbd);//�����ݿ��ж�ȡ����
		System.out.println(showBaojingDate);
		request.setAttribute("showBaojingDates", showBaojingDate);

		return "/doctor/baojingchuli";
	}
	//�������ҳ��������ʾ
	@RequestMapping("/showfenxi.do")
	public String showfenxi(HttpServletRequest request){
		HttpSession hs= request.getSession(true);
		int d_id=(Integer) hs.getAttribute("d_id");//�õ���ǰҽ����id
		
		ShowBaojingDate sbd = new ShowBaojingDate();//������д��������
		sbd.setD_id(d_id);
		List<ShowBaojingDate> showBaojingDate =showBaojingDateService.getListByValue(sbd);//�����ݿ��ж�ȡ����
		System.out.println(showBaojingDate);
		request.setAttribute("showBaojingDates1", showBaojingDate);

		return "/doctor/jibingfenxi";
	}
	//ҽ������ҳ��������ʾ
	@RequestMapping("/showbingli.do")
	public String showbingli(HttpServletRequest request){
		HttpSession hs= request.getSession(true);
		int d_id=(Integer) hs.getAttribute("d_id");//�õ���ǰҽ����id
		
		ShowBingliDate sbl = new ShowBingliDate();//������д��������
		sbl.setD_id(d_id);
		List<ShowBingliDate> showBingliDate =showBingliDateService.getListByValue(sbl);//�����ݿ��ж�ȡ����
		System.out.println(showBingliDate);
		request.setAttribute("showBingliDates", showBingliDate);
		System.out.println("showbingli");
		return "/doctor/huanzhexinxi";
	}
	//ҽ����Ϣ����
	@RequestMapping("/showContextCL.do")
	public String showContextCL(HttpServletRequest request)
	{
		HttpSession hs= request.getSession(true);
		int d_id=(Integer) hs.getAttribute("d_id");
		
		Title title = new Title();
		title.setD_id(d_id);
		List<Title> showcontext = titleService.getListByentity(title);
		System.out.println("~~~~~~~~~~��Ϣ��ʾ");
		System.out.println(showcontext);
		request.setAttribute("showcontexts1", showcontext);
		return "/doctor/xinxichuli";
	}
/*===============================================================================================*/
	
}