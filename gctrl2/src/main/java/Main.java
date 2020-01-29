package main.java;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

//

//* @author couedrao on 25/11/2019.

//* @project gctrl

//

class Main {
    static boolean run = true;
    static final Monitor monitor = new Monitor();
    static final Analyze analyze = new Analyze();
    static final Plan plan = new Plan();
    private static final Execute execute = new Execute();
    static final Knowledge shared_knowledge = new Knowledge();
    private static final boolean log = true;

    public static void main(String[] args) throws Exception {
        Logger.getRootLogger().setLevel(Level.ERROR);


        final class MonitorThread extends Thread {
        	public void run() {
        		try {
                    monitor.start();
                } catch (Exception e) {
                    e.printStackTrace();
                }
        	}
        }
        
        final class PlanThread extends Thread {
        	public void run() {
        		try {
                    plan.start();
                } catch (Exception e) {
                    e.printStackTrace();
                }
        	}
        }
        
       final  class AnalyzeThread extends Thread {
        	public void run() {
        		try {
                    analyze.start();
                } catch (Exception e) {
                    e.printStackTrace();
                }
        	}
        }
        
        final class ExecuteThread extends Thread {
        	public void run() {
        		try {
                    execute.start();
                } catch (Exception e) {
                    e.printStackTrace();
                }
        	}
        }
        
        shared_knowledge.start();
        Thread.sleep(3000);

        MonitorThread m = new MonitorThread();
        m.start();


        AnalyzeThread a = new AnalyzeThread();
        a.start();
        
        PlanThread p = new PlanThread();
        p.start();

        ExecuteThread e = new ExecuteThread();
        e.start();

    }

    static void logger(String from, String msg) {
        if (log) {
            switch (from) {
                case "Knowledge":
                    System.out.println("\u001B[1;31m" + "\t[" + from + "] : \t\t" + msg + "\u001B[0m");
                    break;
                case "Monitor":
                    System.out.println("\u001B[1;32m" + "\t[" + from + "] : \t\t" + msg + "\u001B[0m");
                    break;
                case "Analyze":
                    System.out.println("\u001B[1;34m" + "\t[" + from + "] : \t\t" + msg + "\u001B[0m");
                    break;
                case "Plan":
                    System.out.println("\u001B[1;35m" + "\t[" + from + "] : \t\t\t" + msg + "\u001B[0m");
                    break;
                case "Execute":
                    System.out.println("\u001B[1;36m" + "\t[" + from + "] : \t\t" + msg + "\u001B[0m");
                    break;
                default:
                    System.out.println("\t[" + from + "] : \t\t" + msg);
            }

        }
    }
}